public class Main {
    public static void main(String[] args) {

        // =================== Device =========================

        Device mySimpleDevice = new Device(
                "Samsung",
                120,
                "AB1234567CD"
        );
        Device mySimpleDevice2 = new Device(
                "Samsung",
                120,
                "AB1234567CD"
        );

        // =================== Monitor =========================

        Monitor mySamsungMonitor = new Monitor(
                "Samsung",
                120,
                "AB1234567CD",
                1280,
                1024
        );

        Monitor mySamsungMonitor2 = new Monitor(
                "Samsung",
                120,
                "AB1234567CD",
                1281,
                1024
        );

        // =================== myEthernetAdapter =========================

        EthernetAdapter myEthernetAdapter = new EthernetAdapter(
                "TP-LINK UE200",
                290,
                "AB15554990FGD",
                100,
                "ABCC2Ad5F"
        );
        EthernetAdapter myEthernetAdapter2 = new EthernetAdapter(
                "TP-LINK UE200",
                290,
                "AB15554990FGD",
                100,
                "ABCC2Ad5F"
        );

        System.out.println(mySimpleDevice.toString());
        System.out.println(mySamsungMonitor.toString());
        System.out.println(myEthernetAdapter.toString());

        System.out.println();
        System.out.println("mySimpleDevice == mySimpleDevice2 : " + (mySimpleDevice == mySimpleDevice2));
        System.out.println("mySimpleDevice.equals(mySimpleDevice2) : " + mySimpleDevice.equals(mySimpleDevice2));
        System.out.println("mySimpleDevice.hashCode(): " + mySimpleDevice.hashCode() + " | " + "mySimpleDevice2.hashCode(): " + mySimpleDevice2.hashCode());

        System.out.println();
        System.out.println("mySamsungMonitor == mySamsungMonitor2 : " + (mySamsungMonitor == mySamsungMonitor2));
        System.out.println("mySamsungMonitor.equals(mySamsungMonitor2) : " + mySamsungMonitor.equals(mySamsungMonitor2));
        System.out.println("mySamsungMonitor.hashCode(): " + mySamsungMonitor.hashCode() + " | " + "mySamsungMonitor2.hashCode(): " + mySamsungMonitor2.hashCode());

        System.out.println();
        System.out.println("myEthernetAdapter == myEthernetAdapter2 : " + (myEthernetAdapter == myEthernetAdapter2));
        System.out.println("myEthernetAdapter.equals(myEthernetAdapter2) : " + myEthernetAdapter.equals(myEthernetAdapter2));
        System.out.println("myEthernetAdapter.hashCode(): " + myEthernetAdapter.hashCode() + " | " + "myEthernetAdapter2.hashCode(): " + myEthernetAdapter2.hashCode());
    }
}
