USE [testdb]
GO

/****** Object:  Table [dbo].[nodejs_lesson_7_session]    Script Date: 06.04.2023 19:11:16 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[nodejs_lesson_7_session](
	[sid] [nvarchar](255) NOT NULL,
	[session] [nvarchar](max) NOT NULL,
	[expires] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED
(
	[sid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


