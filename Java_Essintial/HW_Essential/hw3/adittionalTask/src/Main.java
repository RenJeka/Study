public class Main {
    public static void main(String[] args) {
        Printer myPrintRed = new PrinterRed();
        Printer myPrintGreen = new PrinterGreen();
        Printer myPrintBlue = new PrinterBlue();
        myPrintRed.print("Some text!");
        myPrintGreen.print("Some text!");
        myPrintBlue.print("Some text!");
    }
}
