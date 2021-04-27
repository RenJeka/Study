public class PrinterRed extends Printer {
    @Override
    protected void print(String value) {
        System.out.println("\u001B[31m " + value);
    }
}
