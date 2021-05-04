
public class Main {
    public static void main(String[] args) {
//        Animals myZebra = Animals.ZEBRA;
//        Animals myRaccoon = Animals.RACCOON;
//        Animals mySparrow = Animals.SPARROW;
//        Animals myDog = Animals.DOG;
//
//        System.out.println(myZebra.toString());
//        System.out.println(myRaccoon.toString());
//        System.out.println(mySparrow.toString());
//        System.out.println(myDog.toString());

        // Можно воспользоваться циклом "foreach" для прохода по всем элементам перечисления. Вызывая метод "values()"
        for (Animals animal : Animals.values()) {
            System.out.println(animal.toString());
        }
    }
}
