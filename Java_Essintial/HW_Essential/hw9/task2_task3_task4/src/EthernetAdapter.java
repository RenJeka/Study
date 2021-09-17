public class EthernetAdapter extends Device {
    private int speed;
    private String mac;

    public EthernetAdapter(String manufacturer, float price, String serialNumber, int speed, String mac) {
        super(manufacturer, price, serialNumber);
        this.speed = speed;
        this.mac = mac;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public String getMac() {
        return mac;
    }

    public void setMac(String mac) {
        this.mac = mac;
    }

    @Override
    public String toString() {
        return "Ethernet Adapter: manufacturer = " + super.getManufacturer()
                + ", price = " + super.getPrice()
                + ", serialNumber = " + super.getSerialNumber()
                + ", speed = " + this.speed
                + ", mac = " + this.mac;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }

        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }

        EthernetAdapter compareObject = (EthernetAdapter) obj;
        Device compareBaseObject = compareObject;

        if (super.equals(compareBaseObject)) {
            if (speed != compareObject.getSpeed()) {
                return false;
            }
            if (!mac.equals(compareObject.getMac())) {
                return false;
            }
            return true;
        } else {
            return false;
        }
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }
}
