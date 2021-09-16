public class StringTestsMethods {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = "World!";
        String str3 = "!!!!";

//        System.out.println(str1.replace("l", "T"));
//        System.out.println(str1.toLowerCase());
//        System.out.println(str1.toUpperCase());
        long l1 = System.nanoTime();
        String concatStr = str1.concat(str2).concat(str3);
        long l2 = System.nanoTime();

        long l3 = System.nanoTime();
        String concatStr2 = str1 + str2 + str3;
        long l4 = System.nanoTime();

        long l5 = System.nanoTime();
        String sb = new StringBuilder().append(str1).append(str2).append(str3).toString();
        long l6 = System.nanoTime();

        System.out.println(l2-l1);
        System.out.println(l4-l3);
        System.out.println(l6-l5);
//
//        System.out.println(concatStr);
////        System.out.println(concatStr2);
//
//        System.out.println(str1.equals("Hello"));
//        System.out.println(str1.equalsIgnoreCase("HELLO"));
//        System.out.println("str1.startsWith : " + str1.startsWith("H"));
//        System.out.println("str1.endsWith : " + str1.endsWith("o"));
//
//        System.out.println(str1.regionMatches(0, "ol", 0, 0));
//
//        System.out.println(str1.substring(0, 2));
//        System.out.println(str1.substring(2));
//        System.out.println(str1.length());
//        System.out.println("str1.indexOf : " + str1.indexOf("e"));
//
//        Integer i1 = 55;
//        Integer i2 = null;
//
//        System.out.println(i1.toString());
//        System.out.println("Integer.toString(i1) : " + Integer.toString(i1));
//        System.out.println(String.valueOf(i1) instanceof String);
//        System.out.println(String.valueOf(i2));
    }
}
