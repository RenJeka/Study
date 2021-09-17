public class Monitor extends Device {

    private int resolutionX;
    private int resolutionY;

    public Monitor(String manufacturer, float price, String serialNumber, int resolutionX, int resolutionY) {
        super(manufacturer, price, serialNumber);
        this.resolutionX = resolutionX;
        this.resolutionY = resolutionY;
    }

    public int getResolutionX() {
        return resolutionX;
    }

    public void setResolutionX(int resolutionX) {
        this.resolutionX = resolutionX;
    }

    public int getResolutionY() {
        return resolutionY;
    }

    public void setResolutionY(int resolutionY) {
        this.resolutionY = resolutionY;
    }

    @Override
    public String toString() {
        return "Monitor: manufacturer = " + super.getManufacturer()
                + ", price = " + super.getPrice()
                + ", serialNumber = " + super.getSerialNumber()
                + ", X = " + this.resolutionX
                + ", Y = " + this.resolutionY;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }

        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }

        Monitor compareObject = (Monitor) obj;
        Device compareBaseObject = compareObject;

        if (super.equals(compareBaseObject)) {
            if (resolutionX != compareObject.getResolutionX()) {
                return false;
            }
            if (resolutionY != compareObject.getResolutionY()) {
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
