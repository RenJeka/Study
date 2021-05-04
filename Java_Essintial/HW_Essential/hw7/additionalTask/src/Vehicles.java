public enum Vehicles {
    MAZDA(23000), TOYOTA(15000), LAMBORGHINI(49000), LADA(9300);

    private final String color = "white";
    private int price;
    private Vehicles(int price) {
        this.price = price;
    }

    String getColor() {
        return this.color;
    }


    @Override
    public String toString() {
        return this.name() + ": " + "price: " + this.price +  ", color: " + this.color;
    }
}
