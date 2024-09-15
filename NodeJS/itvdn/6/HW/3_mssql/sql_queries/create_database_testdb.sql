USE [master]
GO

/****** Object:  Database [testdb]    Script Date: 01.04.2023 16:10:06 ******/
CREATE DATABASE [testdb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'testdb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\testdb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'testdb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\testdb_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [testdb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [testdb] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [testdb] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [testdb] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [testdb] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [testdb] SET ARITHABORT OFF 
GO

ALTER DATABASE [testdb] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [testdb] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [testdb] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [testdb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [testdb] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [testdb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [testdb] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [testdb] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [testdb] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [testdb] SET  DISABLE_BROKER 
GO

ALTER DATABASE [testdb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [testdb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [testdb] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [testdb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [testdb] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [testdb] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [testdb] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [testdb] SET RECOVERY SIMPLE 
GO

ALTER DATABASE [testdb] SET  MULTI_USER 
GO

ALTER DATABASE [testdb] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [testdb] SET DB_CHAINING OFF 
GO

ALTER DATABASE [testdb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [testdb] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO

ALTER DATABASE [testdb] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [testdb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [testdb] SET QUERY_STORE = ON
GO

ALTER DATABASE [testdb] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO

ALTER DATABASE [testdb] SET  READ_WRITE 
GO


