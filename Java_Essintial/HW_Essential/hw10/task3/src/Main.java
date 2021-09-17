public class Main {
    public static void main(String[] args) {
        MyDictionary<String, Integer> myDict1 = new MyDictionary<>();
        myDict1.addEntry("33", 11);
        myDict1.addEntry("135", 214);
        myDict1.addEntry("135", 222);
        myDict1.addEntry("235", 1253);
        myDict1.addEntry("346", 136);

        System.out.println(myDict1.getSize());
        System.out.println(myDict1.getElementByIndex(2));
        System.out.println(myDict1.getElementByKey("135"));
        myDict1.addEntry("2364", 1111);
        myDict1.addEntry("347", 0000);
        System.out.println(myDict1.getSize());
    }
}
