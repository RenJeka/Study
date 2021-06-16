public class Car implements Comparable<Car>{
    private int speed;
    private int price;
    private String model;

    public int getSpeed() {
        return speed;
    }

    public int getPrice() {
        return price;
    }

    public String getModel() {
        return model;
    }

    public String getColor() {
        return color;
    }

    private String color;

    public Car(int speed, int price, String model, String color) {
        this.speed = speed;
        this.price = price;
        this.model = model;
        this.color = color;
    }

    @Override
    public int compareTo(Car object) {
        int tempSpeed = this.speed - object.getSpeed();
        int tempPrice = this.price - object.getPrice();
        int tempModel = this.model.compareTo(object.getModel());
        int tempColor = this.color.compareTo(object.getColor());

        if (tempSpeed != 0) {
            return tempSpeed;
        } else if (tempPrice != 0) {
            return tempPrice;
        } else if (tempModel != 0) {
            return tempModel;
        } else {
            return tempColor;
        }
    }

    private int compareStrings(String string1, String string2) {
//        if () {
//        }
        return 0;
    }

    @Override
    public String toString() {
        return "{" +
                "speed=" + speed +
                ", price=" + price +
                ", model='" + model + '\'' +
                ", color='" + color + '\'' +
                '}';
    }
}
