package task3;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Price {
    // Поля клаcса Price
    String name;
    String shop_name;
    double price;

    // Конструктор с параметрами
    public Price(String name, String shop_name, double price) {
        this.name = name;
        this.shop_name = shop_name;
        this.price = price;
    }

    // Перегрузка метода toString()
    @Override
    public String toString() {
        return "NameOfProduct = " + this.name + "; Shop_name = " + this.shop_name + "; Price = " + this.price;
    }
}
