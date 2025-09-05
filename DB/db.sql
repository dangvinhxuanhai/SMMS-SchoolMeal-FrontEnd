/* ===========================================================
   EduMeal Management System – SQL Server Final Schema (FULL)
   Date: 2025‑07‑16 | Author: ChatGPT
   Description:
   ‑ Normalized 3NF, all PK/FK, audit columns (CreatedAt/By, UpdatedAt/By, IsActive)
   ‑ Includes all modules: Core, Academic, Allergy & Nutrition, Menu & Meals,
     Inventory & Purchasing, Billing, Notifications.
   ‑ Ready for EF Core Db‑First scaffold & production deploy.
   =========================================================== */

/* ---------------- 0. Create / Reset Database ---------------- */
USE master;
GO
IF DB_ID('EduMeal') IS NOT NULL DROP DATABASE EduMeal;
GO
CREATE DATABASE EduMeal;
GO
USE EduMeal;
GO

/* ---------------- 2. Core Identity & Security -------------- */

CREATE TABLE Schools
(
    SchoolId INT IDENTITY PRIMARY KEY,
    SchoolName NVARCHAR(150) NOT NULL,
    ContactEmail NVARCHAR(150),
    Hotline NVARCHAR(20),
    SchoolAddress NVARCHAR(200),
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    CreatedBy INT NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy INT NULL
);

CREATE TABLE Users
(
    UserId INT IDENTITY PRIMARY KEY,
    Email NVARCHAR(255) UNIQUE NULL,
    PasswordHash NVARCHAR(255) NOT NULL,
    FullName NVARCHAR(150) NOT NULL,
    Phone NVARCHAR(20) NOT NULL,
    LanguagePref NVARCHAR(10) NOT NULL DEFAULT 'vi',
    RoleCode CHAR(3) NOT NULL,
    -- Mã role viết tắt
    SchoolId INT NULL,
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    CreatedBy INT NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy INT NULL,
    IdentityNo NVARCHAR(20) NULL,
    CONSTRAINT FK_Users_School  FOREIGN KEY (SchoolId) REFERENCES Schools(SchoolId),
    CONSTRAINT FK_Users_UpdBy   FOREIGN KEY (UpdatedBy) REFERENCES Users(UserId),
    CONSTRAINT UQ_Users_Phone UNIQUE (Phone),
    CONSTRAINT CK_Users_RoleCode CHECK (RoleCode IN (
        'ADM',  -- Admin
        'TCH',  -- Teacher
        'PAR',  -- Parent
        'KIT',  -- Kitchen Staff
        'INV',   -- Inventory manager
        'PRN'   -- Principal
    ))
);
CREATE UNIQUE INDEX UX_Users_Email_NotNull ON Users(Email) WHERE Email IS NOT NULL;


CREATE TABLE AuditLogs
(
    LogId BIGINT IDENTITY PRIMARY KEY,
    UserId INT NOT NULL,
    ActionDesc NVARCHAR(100) NOT NULL,
    TableName NVARCHAR(128),
    RecordId NVARCHAR(64),
    OldData NVARCHAR(MAX),
    NewData NVARCHAR(MAX),
    ActionType NVARCHAR(100),
    -- Insert/Update/Delete
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    CONSTRAINT FK_AuditLogs_User FOREIGN KEY (UserId) REFERENCES Users(UserId)
);

/* ---------------- 3. Academic Domain ----------------------- */
CREATE TABLE AcademicYears
(
    YearId INT IDENTITY PRIMARY KEY,
    YearName NVARCHAR(20) UNIQUE NOT NULL,
    BoardingStartDate DATETIME2 NULL,
    BoardingEndDate DATETIME2 NULL
);


CREATE TABLE Teachers
(
    TeacherId INT PRIMARY KEY,
    -- 1‑1 với Users
    EmployeeCode NVARCHAR(30) UNIQUE,
    HiredDate DATE NULL,
    IsActive BIT NOT NULL DEFAULT 1,
    FOREIGN KEY (TeacherId) REFERENCES Users(UserId)
);

CREATE TABLE Classes
(
    ClassId INT IDENTITY PRIMARY KEY,
    ClassName NVARCHAR(50) NOT NULL,
    SchoolId INT NOT NULL,
    YearId INT NOT NULL,
    TeacherId INT UNIQUE NULL,
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    UpdatedAt DATETIME2 NULL,
    UpdatedBy INT NULL,
    FOREIGN KEY (SchoolId) REFERENCES Schools(SchoolId),
    FOREIGN KEY (YearId)   REFERENCES AcademicYears(YearId),
    FOREIGN KEY (TeacherId) REFERENCES Teachers(TeacherId)
);

CREATE TABLE Students
(
    StudentId INT IDENTITY PRIMARY KEY,
    FullName NVARCHAR(150) NOT NULL,
    Gender CHAR(1) CHECK (Gender IN ('M','F')),
    DateOfBirth DATE,
    SchoolId INT NOT NULL,
    ParentId INT NULL,
    RelationName NVARCHAR(50) NULL,
    -- bm, ông bà, anh/chị, ...
    AvatarUrl NVARCHAR(300),
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    UpdatedAt DATETIME2 NULL,
    UpdatedBy INT NULL,
    FOREIGN KEY (SchoolId) REFERENCES Schools(SchoolId),
    CONSTRAINT FK_Students_Parent FOREIGN KEY (ParentId) REFERENCES Users(UserId)
);

/* Staging cho bulk import học sinh */
CREATE TABLE StagingStudents
(
    StageId INT IDENTITY PRIMARY KEY,
    SchoolId INT NOT NULL,
    FullName NVARCHAR(150) NOT NULL,
    DateOfBirth DATE NOT NULL,
    Gender CHAR(1) CHECK (Gender IN ('M','F')),
    ClassName NVARCHAR(50) NULL,
    ParentEmail1 NVARCHAR(255) NULL,
    ParentRelation1 NVARCHAR(20) NULL,
    ParentEmail2 NVARCHAR(255) NULL,
    ParentRelation2 NVARCHAR(20) NULL,
    Phone NVARCHAR(20) NULL,
    ImportBatchId UNIQUEIDENTIFIER NOT NULL,
    RowStatus NVARCHAR(20) NULL,
    RowErrors NVARCHAR(1000) NULL
);

CREATE TABLE StudentClasses
(
    StudentId INT NOT NULL,
    ClassId INT NOT NULL,
    JoinedDate DATE NOT NULL,
    LeftDate DATE NULL,
    RegistStatus BIT NOT NULL DEFAULT(0),
    PRIMARY KEY (StudentId, ClassId),
    FOREIGN KEY (StudentId) REFERENCES Students(StudentId),
    FOREIGN KEY (ClassId)   REFERENCES Classes(ClassId)
);

CREATE TABLE StudentHealthRecords
(
    RecordId INT IDENTITY PRIMARY KEY,
    StudentId INT NOT NULL,
    RecordMonth DATE NOT NULL,
    HeightCm DECIMAL(5,2),
    WeightKg DECIMAL(5,2),
    FOREIGN KEY (StudentId) REFERENCES Students(StudentId)
);

CREATE TABLE StudentImages
(
    ImageId INT IDENTITY PRIMARY KEY,
    StudentId INT NOT NULL,
    UploadedBy INT NULL,
    ImageUrl NVARCHAR(300) NOT NULL,
    Caption NVARCHAR(300),
    TakenAt DATETIME2 NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    FOREIGN KEY (StudentId) REFERENCES Students(StudentId),
    FOREIGN KEY (UploadedBy) REFERENCES Users(UserId)
);

CREATE TABLE Tags
(
    TagId INT IDENTITY PRIMARY KEY,
    TagName NVARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE StudentImageTags
(
    ImageId INT NOT NULL,
    TagId INT NOT NULL,
    TagNotes NVARCHAR(255) NULL,
    IsFavourite BIT NOT NULL DEFAULT 0,
    PRIMARY KEY (ImageId, TagId),
    FOREIGN KEY (ImageId) REFERENCES StudentImages(ImageId),
    FOREIGN KEY (TagId)   REFERENCES Tags(TagId)
);

/* ---------------- 4. Allergy & Nutrition ------------------- */
CREATE TABLE Allergens
(
    AllergenId INT IDENTITY PRIMARY KEY,
    AllergenName NVARCHAR(100) UNIQUE NOT NULL,
    AllergenMatter NVARCHAR(500) NULL,
    -- mô tả/chất gây dị ứng
    AllergenInfo NVARCHAR(300) NULL
    -- link/ghi chú thêm
);

CREATE TABLE Ingredients
(
    IngredientId INT IDENTITY PRIMARY KEY,
    IngredientName NVARCHAR(100) NOT NULL,
    IngredientType NVARCHAR(100),
    -- protein, rau, củ, quả,...
    EnergyKcal DECIMAL(7,2),
    ProteinG DECIMAL(7,2),
    FatG DECIMAL(7,2),
    CarbG DECIMAL(7,2),
    IsActive BIT NOT NULL DEFAULT 1
);

CREATE TABLE AllergeticIngredients
(
    IngredientId INT NOT NULL,
    AllergenId INT NOT NULL,
    ReportedAt DATETIME2 NULL,
    -- NEW
    SeverityLevel NVARCHAR(10) NULL
        CHECK (SeverityLevel IN ('low','medium','high')),
    -- NEW
    Notes NVARCHAR(500) NULL,
    -- NEW
    ReactionNotes NVARCHAR(500) NULL,
    -- NEW
    HandlingNotes NVARCHAR(500) NULL,
    -- NEW
    DiagnosedAt DATETIME2 NULL,
    -- NEW
    PRIMARY KEY (IngredientId, AllergenId),
    FOREIGN KEY (IngredientId) REFERENCES Ingredients(IngredientId),
    FOREIGN KEY (AllergenId)   REFERENCES Allergens(AllergenId)
);

CREATE TABLE FoodItems
(
    FoodId INT IDENTITY PRIMARY KEY,
    FoodName NVARCHAR(150) NOT NULL,
    FoodType NVARCHAR(150) ,
    --tráng miệng, món chính, khai vị,...
    Description NVARCHAR(500),
    ImageUrl NVARCHAR(300),
    IsActive BIT NOT NULL DEFAULT 1
);

CREATE TABLE FoodItemIngredients
(
    FoodId INT NOT NULL,
    IngredientId INT NOT NULL,
    QuantityGram DECIMAL(9,2) NOT NULL,
    PRIMARY KEY (FoodId, IngredientId),
    FOREIGN KEY (FoodId)       REFERENCES FoodItems(FoodId),
    FOREIGN KEY (IngredientId) REFERENCES Ingredients(IngredientId)
);

CREATE TABLE StudentAllergens
(
    StudentId INT NOT NULL,
    AllergenId INT NOT NULL,
    DiagnosedAt DATETIME2 NULL,
    -- NEW
    Notes NVARCHAR(500) NULL,
    -- NEW
    ReactionNotes NVARCHAR(500) NULL,
    -- NEW
    HandlingNotes NVARCHAR(500) NULL,
    -- NEW
    PRIMARY KEY (StudentId, AllergenId),
    FOREIGN KEY (StudentId) REFERENCES Students(StudentId),
    FOREIGN KEY (AllergenId) REFERENCES Allergens(AllergenId)
);

/* ---------------- 5. Menu & Meal Modules ------------------- */
CREATE TABLE Menus
(
    MenuId INT IDENTITY PRIMARY KEY,
    SchoolId INT NOT NULL,
    PublishedAt DATETIME2 NULL,
    FOREIGN KEY (SchoolId) REFERENCES Schools(SchoolId),
);

CREATE TABLE ScheduleMeal
(
    ScheduleMealId INT IDENTITY PRIMARY KEY,
    SchoolId INT NOT NULL,
    MenuId INT NOT NULL,
    -- trỏ đến menu template
    WeekStart DATE NOT NULL,
    -- ngày đầu tuần
    WeekEnd DATE NOT NULL,
    -- ngày cuối tuần
    WeekNo SMALLINT NOT NULL,
    -- 1..53
    YearNo SMALLINT NOT NULL,
    -- ví dụ: 2025
    Status NVARCHAR(20) NOT NULL
        CHECK (Status IN ('Draft','Published','Archived'))
        DEFAULT 'Draft',
    PublishedAt DATETIME2 NULL,
    Notes NVARCHAR(300) NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    CreatedBy INT NULL,

    CONSTRAINT FK_ScheduleMeal_School FOREIGN KEY (SchoolId) REFERENCES Schools(SchoolId),
    CONSTRAINT FK_ScheduleMeal_Menu   FOREIGN KEY (MenuId)   REFERENCES Menus(MenuId),
    CONSTRAINT FK_ScheduleMeal_User   FOREIGN KEY (CreatedBy) REFERENCES Users(UserId),

    /* Không trùng tuần trong cùng trường */
    CONSTRAINT UQ_ScheduleMeal_School_WeekStart UNIQUE (SchoolId, WeekStart),
    CONSTRAINT UQ_ScheduleMeal_School_WeekNoYear UNIQUE (SchoolId, WeekNo, YearNo)
);
CREATE INDEX IX_ScheduleMeal_Menu ON ScheduleMeal(MenuId);
CREATE INDEX IX_ScheduleMeal_SchoolWeek ON ScheduleMeal(SchoolId, WeekStart, WeekEnd);

CREATE TABLE MenuDays
(
    MenuDayId INT IDENTITY PRIMARY KEY,
    MenuId INT NOT NULL,
    DayOfWeek TINYINT NOT NULL CHECK (DayOfWeek BETWEEN 1 AND 7),
    -- 1=Mon ... 7=Sun
    MealType NVARCHAR(20) NOT NULL,
    -- Breakfast/Lunch/Snack...
    Notes NVARCHAR(300) NULL,
    CONSTRAINT FK_MenuDays_Menus FOREIGN KEY (MenuId) REFERENCES dbo.Menus(MenuId),
    CONSTRAINT UQ_MenuDays UNIQUE (MenuId, DayOfWeek, MealType)
);
CREATE INDEX IX_MenuDays_Menu ON dbo.MenuDays(MenuId, DayOfWeek, MealType);

CREATE TABLE MenuDayFoodItems
(
    MenuDayId INT NOT NULL,
    FoodId INT NOT NULL,
    SortOrder INT NULL,
    CONSTRAINT PK_MenuDayFoodItems PRIMARY KEY (MenuDayId, FoodId),
    CONSTRAINT FK_MenuDayFoodItems_MenuDay FOREIGN KEY (MenuDayId) REFERENCES dbo.MenuDays(MenuDayId),
    CONSTRAINT FK_MenuDayFoodItems_Food    FOREIGN KEY (FoodId)    REFERENCES dbo.FoodItems(FoodId)
);

CREATE TABLE DailyMeals
(
    DailyMealId INT IDENTITY PRIMARY KEY,
    ScheduleMealId INT NOT NULL,
    -- tuần cụ thể
    MealDate DATE NOT NULL,
    -- ngày thật
    MealType NVARCHAR(20) NOT NULL,
    Notes NVARCHAR(300) NULL,
    CONSTRAINT FK_DailyMeals_Schedule FOREIGN KEY (ScheduleMealId) REFERENCES dbo.ScheduleMeal(ScheduleMealId),
    CONSTRAINT UX_DailyMeals UNIQUE (ScheduleMealId, MealDate, MealType)
    -- chống trùng
);
CREATE INDEX IX_DailyMeals_Schedule ON dbo.DailyMeals(ScheduleMealId, MealDate);

CREATE TABLE MenuFoodItems
(
    DailyMealId INT NOT NULL,
    FoodId INT NOT NULL,
    SortOrder INT NULL,
    CONSTRAINT PK_MenuFoodItems PRIMARY KEY (DailyMealId, FoodId),
    CONSTRAINT FK_MenuFoodItems_DailyMeals FOREIGN KEY (DailyMealId) REFERENCES dbo.DailyMeals(DailyMealId),
    CONSTRAINT FK_MenuFoodItems_FoodItems  FOREIGN KEY (FoodId)      REFERENCES dbo.FoodItems(FoodId)
);

CREATE TABLE Feedbacks
(
    FeedbackId INT IDENTITY PRIMARY KEY,
    SenderId INT NOT NULL,
    TargetType NVARCHAR(20) NOT NULL,
    TargetRef NVARCHAR(50) NULL,
    Content NVARCHAR(1000) NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    DailyMealId INT NULL,
    --zNew attribute
    FOREIGN KEY (SenderId) REFERENCES Users(UserId),
    CONSTRAINT FK_Feedbacks_DailyMeal FOREIGN KEY (DailyMealId) REFERENCES DailyMeals(DailyMealId)
    --zNew FOREIGN KEY 
);

/* ---------------- 6. Inventory & Purchasing ---------------- */
CREATE TABLE InventoryItems
(
    ItemId INT IDENTITY PRIMARY KEY,
    IngredientId INT NOT NULL,
    SchoolId INT NOT NULL,
    ItemName NVARCHAR(150) NULL,
    QuantityGram DECIMAL(12,2) NOT NULL,
    ExpirationDate DATE NULL,
    BatchNo NVARCHAR(100) NULL,
    Origin NVARCHAR(255) NULL,
    LastUpdated DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    FOREIGN KEY (IngredientId) REFERENCES Ingredients(IngredientId),
    FOREIGN KEY (SchoolId)     REFERENCES Schools(SchoolId)
);

CREATE TABLE InventoryTransactions
(
    TransId BIGINT IDENTITY PRIMARY KEY,
    ItemId INT NOT NULL,
    TransType NVARCHAR(10) NOT NULL CHECK (TransType IN ('IN','OUT','ADJ')),
    QuantityGram DECIMAL(12,2) NOT NULL,
    TransDate DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    Reference NVARCHAR(100),
    FOREIGN KEY (ItemId) REFERENCES InventoryItems(ItemId)
);
CREATE INDEX IX_Inv_ItemDate ON InventoryTransactions(ItemId, TransDate);

CREATE TABLE PurchasePlans
(
    PlanId INT IDENTITY PRIMARY KEY,
    --SchoolId         INT NOT NULL,
    GeneratedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    PlanStatus NVARCHAR(20) NOT NULL CHECK (PlanStatus IN ('Draft','Confirmed','Exported')),
    MenuId INT NOT NULL,
    --zNew attribute
    StaffId INT NOT NULL,
    -- nhân sự phụ trách
    --FOREIGN KEY (SchoolId) REFERENCES Schools(SchoolId),
    CONSTRAINT FK_PurchasePlans_Menus FOREIGN KEY (MenuId) REFERENCES Menus(MenuId),
    --zNew FOREIGN KEY 
    CONSTRAINT FK_PurchasePlans_Staff FOREIGN KEY (StaffId) REFERENCES Users(UserId)
);

CREATE TABLE PurchasePlanLines
(
    PlanId INT NOT NULL,
    IngredientId INT NOT NULL,
    RqQuanityGram DECIMAL(12,2) NOT NULL,
    PRIMARY KEY (PlanId, IngredientId),
    FOREIGN KEY (PlanId)      REFERENCES PurchasePlans(PlanId),
    FOREIGN KEY (IngredientId) REFERENCES Ingredients(IngredientId)
);

/* ---------------- 7. Billing ------------------------------- */
CREATE TABLE Invoices
(
    InvoiceId BIGINT IDENTITY PRIMARY KEY,
    StudentId INT NOT NULL,
    MonthNo SMALLINT NOT NULL,
    DateFrom DATE NOT NULL,
    DateTo DATE NOT NULL,
    AbsentDay INT NOT NULL DEFAULT 0,
    --hoc sinh nghi
    --TotalAmount  DECIMAL(18,2) NOT NULL,
    --Discount     DECIMAL(18,2) NOT NULL DEFAULT 0,
    Status NVARCHAR(20) NOT NULL CHECK (Status IN ('Unpaid','Paid','Refunded')),
    FOREIGN KEY (StudentId) REFERENCES Students(StudentId),
);

CREATE INDEX IX_Invoice_Student ON Invoices(StudentId);

CREATE TABLE Payments
(
    PaymentId BIGINT IDENTITY PRIMARY KEY,
    InvoiceId BIGINT NOT NULL,
    ExpectedAmount DECIMAL(18,2) NOT NULL DEFAULT 600,
    PaidAmount DECIMAL(18,2) NOT NULL,
    --ChangeAmount      DECIMAL(18,2) NOT NULL DEFAULT 0,
    PaidAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    Method NVARCHAR(20) NOT NULL CHECK (Method IN ('Cash','Bank')),
    ReferenceNo NVARCHAR(100) NULL,
    FOREIGN KEY (InvoiceId) REFERENCES Invoices(InvoiceId)
);

/* ---------------- 8. Notifications ------------------------- */
CREATE TABLE Notifications
(
    NotificationId BIGINT IDENTITY PRIMARY KEY,
    Title NVARCHAR(150) NOT NULL,
    Content NVARCHAR(MAX) NOT NULL,
    AttachmentUrl NVARCHAR(300) NULL,
    SenderId INT NULL,
    SendType NVARCHAR(20) NOT NULL CHECK (SendType IN ('Immediate','Scheduled','Recurring')),
    ScheduleCron NVARCHAR(100) NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    FOREIGN KEY (SenderId) REFERENCES Users(UserId)
);

CREATE TABLE NotificationRecipients
(
    NotificationId BIGINT NOT NULL,
    UserId INT NOT NULL,
    IsRead BIT NOT NULL DEFAULT 0,
    ReadAt DATETIME2 NULL,
    PRIMARY KEY (NotificationId, UserId),
    FOREIGN KEY (NotificationId) REFERENCES Notifications(NotificationId),
    FOREIGN KEY (UserId)        REFERENCES Users(UserId)
);

/* ---------------- End of Schema --------------------------- */

/* ------------------ Update new ---------------------------- */

CREATE TABLE Attendance
(
    AttendanceId INT IDENTITY PRIMARY KEY,
    StudentId INT NOT NULL,
    AbsentDate DATE NOT NULL,
    Reason NVARCHAR(300) NULL,
    NotifiedBy INT NULL,
    -- Ai đã ghi nhận
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    FOREIGN KEY (StudentId)  REFERENCES Students(StudentId),
    FOREIGN KEY (NotifiedBy) REFERENCES Users(UserId)
);

CREATE TABLE PurchaseOrders
(
    OrderId INT IDENTITY(1,1) PRIMARY KEY,
    SchoolId INT NOT NULL,
    OrderDate DATETIME NOT NULL DEFAULT GETDATE(),
    poStatus NVARCHAR(50) NULL,
    SupplierName NVARCHAR(255) NULL,
    Note NVARCHAR(MAX) NULL,
    PlanId INT NULL,
    UserId INT NOT NULL,
    -- Người tạo / phụ trách đơn hàng

    CONSTRAINT FK_PurchaseOrders_Schools FOREIGN KEY (SchoolId)
        REFERENCES Schools(SchoolId),

    CONSTRAINT FK_PurchaseOrders_Plans FOREIGN KEY (PlanId)
        REFERENCES PurchasePlans(PlanId),

    CONSTRAINT FK_PurchaseOrders_Users FOREIGN KEY (UserId)
        REFERENCES Users(UserId)
);

CREATE TABLE PurchaseOrderLines
(
    polId INT IDENTITY(1,1) PRIMARY KEY,
    OrderId INT NOT NULL,
    IngredientId INT NOT NULL,
    QuantityGram DECIMAL(18,2) NOT NULL,
    UnitPrice DECIMAL(18,2) NULL,
    BatchNo NVARCHAR(100) NULL,
    Origin NVARCHAR(255) NULL,
    ExpiryDate DATE NULL,
    UserId INT NOT NULL,
    -- Người nhập dòng này (nếu cần lưu chi tiết)

    CONSTRAINT FK_PurchaseOrderLines_Orders FOREIGN KEY (OrderId)
        REFERENCES PurchaseOrders(OrderId),

    CONSTRAINT FK_PurchaseOrderLines_Ingredients FOREIGN KEY (IngredientId)
        REFERENCES Ingredients(IngredientId),

    CONSTRAINT FK_PurchaseOrderLines_Users FOREIGN KEY (UserId)
        REFERENCES Users(UserId)
);
/* Gợi ý index để truy xuất theo Ingredient + Batch/Origin */
CREATE INDEX IX_PurchaseOrderLines_Ingredient_Batch ON PurchaseOrderLines(IngredientId, BatchNo);
CREATE INDEX IX_PurchaseOrderLines_Ingredient_Origin ON PurchaseOrderLines(IngredientId, Origin);