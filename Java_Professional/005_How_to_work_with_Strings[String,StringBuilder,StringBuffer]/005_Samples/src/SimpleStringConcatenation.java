/**
 * Created by Yevhenii Tykhonov.
 */
public class SimpleStringConcatenation {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = "World";
        String str3 = str1 + str2;

        String str4 = new StringBuilder().append(str1).append(str2).toString();
    }
}
