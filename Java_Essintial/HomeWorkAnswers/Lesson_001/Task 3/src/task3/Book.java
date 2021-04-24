package task3;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Book {
    public static void main(String[] args) {

        Author author = new Author();
        Content content = new Content();
        Title title = new Title();

        // Записываем значения
        author.setAuthor("Author1");
        content.setContent("Hello world content");
        title.setTitle("Hello world title");

        // Вызов метода show();
        author.show();
        content.show();
        title.show();
    }
}
