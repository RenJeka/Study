public class PrinterGreen extends Printer {
    @Override
    protected void print(String value) {
        System.out.println("\u001B[32m " + value);
    }

    
}
