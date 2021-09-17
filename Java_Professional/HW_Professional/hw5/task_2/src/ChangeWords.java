import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class ChangeWords {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder(100000);
        sb.append("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. ");

        String workingString = sb.toString();
        List<String> sentences = new LinkedList<>(Arrays.asList(workingString.split("\\. ")));
        List<String> changedSentences = new LinkedList<>();

        for (String sentence : sentences) {
            List<String> words = new LinkedList<>(Arrays.asList(sentence.split(" ")));
            StringBuilder firstWord = new StringBuilder().append(words.get(words.size() - 1)).append(" ");
            String firstLetterFirstWord = firstWord.substring(0, 1).toUpperCase();
            StringBuilder lastWord =  new StringBuilder().append(words.get(0)).append(".");
            String firstLetterLasWord = lastWord.substring(0, 1).toLowerCase();

            StringBuilder newSentence = new StringBuilder();

            // Устанавливаем правильные первые буквы (В первом слове — большая, в последнем — маленькая)
            firstWord.replace(0, 1, firstLetterFirstWord);
            lastWord.replace(0, 1, firstLetterLasWord);

            // Добавляем Слова в новое предложение.
            for (int i = 0; i < words.size(); i++) {
                // Меняем первое слово
                if (i == 0) {
                    newSentence.append(firstWord);

                // Меняем последнее слово
                } else if (i == words.size() - 1) {
                    newSentence.append(lastWord);
                } else {
                    newSentence.append(words.get(i)).append(" ");
                }
            }
            changedSentences.add(newSentence.toString());
        }
        System.out.println("changedSentences : " + changedSentences);
    }
}
