USE [testdb]
GO

/****** Object:  Table [dbo].[nodejs_lesson_6]    Script Date: 01.04.2023 16:09:49 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[nodejs_lesson_6](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[login] [nvarchar](30) NULL,
	[password] [nvarchar](30) NULL,
	[email] [nvarchar](50) NULL,
 CONSTRAINT [PK_nodejs_lesson_6] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


