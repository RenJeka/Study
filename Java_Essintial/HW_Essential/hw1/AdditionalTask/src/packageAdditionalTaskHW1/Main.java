package packageAdditionalTaskHW1;

public class Main {
    public static void main(String[] args) {
        Address address1 = new Address();
        address1.index = "02123";
        address1.country = "USA";
        address1.city = "Springfield";
        address1.street = "Ever Green Terrace";
        address1.house = "648";
        address1.apartment = "1";

        System.out.println("index : " + address1.index);
        System.out.println("country : " + address1.country);
        System.out.println("city : " + address1.city);
        System.out.println("street : " + address1.street);
        System.out.println("house : " + address1.house);
        System.out.println("apartment : " + address1.apartment);

    }
}
