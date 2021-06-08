import java.util.Scanner;
import java.sql.*;

public class Program {

    final String getDataUsersQuery =    "SELECT id, name, phone "+
                            "FROM users "+
                            "ORDER BY id";

    public static void main (String ...args) {
        Program myProgram = new Program();
        if (myProgram.open()) {
            myProgram.select();
            myProgram.insert();
            myProgram.select();
            myProgram.close();
        } else {
            System.out.println("Database was not connected! Please, check your connection to database.");
        }

    }

    Connection co;

    public boolean open() {
        try {
            Class.forName("org.sqlite.JDBC");
            co = DriverManager.getConnection("jdbc:sqlite:DB\\users.db");
            return true;
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    public void select() {
        try {

            Statement statement = co.createStatement();
            int maxNameLength = getMaxLength(statement, "name");
            ResultSet rs = statement.executeQuery(getDataUsersQuery);

            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                name = getMaxLengthString(name, maxNameLength, ' ');
                String phone = rs.getString("phone");
                System.out.println(id +"|"+ name +"|"+ phone);
            }
            rs.close();
            statement.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void insert() {
        try{
            Scanner scanner = new Scanner(System.in);
            System.out.println("Enter user name: ");
            String name = scanner.nextLine();
            System.out.println("Enter user phone: ");
            String phone = scanner.nextLine();

            String query = "INSERT INTO users (name, phone) " + "VALUES ('" + name + "', '"+ phone +"')";
            Statement statement = co.createStatement();
            statement.executeUpdate(query);

            System.out.println("Row has been added!");
        }
        catch(Exception e) {
            System.out.println(e.toString());
        }
    }

    public void close() {
        try {
            co.close();
        }
        catch (Exception e){
            System.out.println(e.toString());
        }
    }

    /**
     * Метод возвращает максимальную длину строки в заданной колонке таблицы
     * @param statement statement при подключении к БД. (statement НЕ закрывается)
     * @param columnLabel название колонки, у которой нужно взять максимальное значение
     * @return длинна максимальной строки
     * @throws SQLException
     */
    private int getMaxLength(Statement statement, String columnLabel) throws SQLException {
        // Вариант реализации с использованием запроса к БД
        // String maxLengthNameQuery = "SELECT max(length(name)) as maxName FROM users";
        // rs2 = statement.executeQuery(maxLengthNameQuery);
        ResultSet rs = statement.executeQuery(getDataUsersQuery);
        int maxLength = 0;
        while (rs.next()) {
            int currentNameLength = rs.getString(columnLabel).length();
            if (currentNameLength > maxLength) {
                maxLength = currentNameLength;
            }
        }
        rs.close();
        return maxLength;
    }

    /**
     * Метод добавляет в конец строки недостающие символы (до указанной длинны)
     * @param rawString изначальная строка
     * @param length Длинна строки
     * @param symbolForReplace Символы для дополнения
     * @return строка заданной длинны.
     */
    private String getMaxLengthString(String rawString, int length, char symbolForReplace) {
        while (rawString.length() < length) {
            rawString = rawString.concat(String.valueOf(symbolForReplace));
        }
        return rawString;
    }

}
