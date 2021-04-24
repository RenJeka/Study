package additionalTask;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Main {
    public static void main(String[] args) {
        // Создаем экземляр класса(объект) Address
        Address address = new Address();

        address.setIndex(1);
        address.setCity("Kiev");
        address.setCountry("Ukraine");
        address.setStreet("Mariny Raskovoy");
        address.setHouse("19");
        address.setApartment("1");

        // Вывод на экран
        System.out.println(address.toString());
    }
}
