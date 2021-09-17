public class Main {
    public static void main(String[] args) {
        Integer array1[] = {11, 22, 33, 44};
        MyList<Integer> myList1 = new MyList(array1);
        System.out.println(myList1.hashCode());
        myList1.addElement(66);
        System.out.println(myList1.hashCode());
        myList1.addElement(77);
        System.out.println(myList1.hashCode());
        System.out.println("myList1.getElementByIndex(5) : " + myList1.getElementByIndex(5));
    }
}
