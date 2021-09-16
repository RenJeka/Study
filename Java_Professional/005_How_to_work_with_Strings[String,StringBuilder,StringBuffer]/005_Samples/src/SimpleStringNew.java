public class SimpleStringNew {
    public static void main(String[] args) {
        String myString = "Hello!";
        String myString2 = new String("Hello!");

        char[] arrChar = {'H', 'e', 'l', 'l', 'o', '!'};
        String str3 = new String(arrChar, 0, 2);

        System.out.println(str3);
    }
}
