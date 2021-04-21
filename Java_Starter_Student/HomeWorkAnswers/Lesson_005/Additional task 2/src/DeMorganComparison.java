/**
 * Created by Evgeniy on 11.03.2016.
 */
public class DeMorganComparison {
    public static void main(String[] args) {
        boolean a = true;
        boolean b = false;

        /* Для применения теорем Де Моргана к логическому оператору AND или OR и паре операндов,
        требуется инвертировать оба операнда, заменить (AND на OR) или (OR на AND)
        и инвертировать все выражение полностью. */
        
        boolean c = !(!a & !b);
        // boolean c = a | b;

        System.out.println(c);
    }
}
