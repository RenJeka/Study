package PackageTask3HW1;

public class Book {

    Title bookTitle;
    Author bookAuthor;
    Content bookContent;

    public Book() {

    }

    void addTitle(String titleName) {
        this.bookTitle = new Title(titleName);
    }

    void addAuthor(String authorName) {
        this.bookAuthor = new Author(authorName);
    }

    void addContent(String content) {
        this.bookContent = new Content(content);
    }

    public static void main(String[] args) {
        Book myFirstBook = new Book();

        myFirstBook.addAuthor("RenJeka");
        myFirstBook.addTitle("My trip into the world of programming");
        myFirstBook.addContent("Somewhere in the distant years, when I just started to get involved in programming ...");

        myFirstBook.bookTitle.show();
        myFirstBook.bookAuthor.show();
        myFirstBook.bookContent.show();
    }
}
