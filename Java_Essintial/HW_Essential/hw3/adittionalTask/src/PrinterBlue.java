public class PrinterBlue extends Printer {
    @Override
    protected void print(String value) {
        System.out.println("\u001B[34m " + value);
    }
}
