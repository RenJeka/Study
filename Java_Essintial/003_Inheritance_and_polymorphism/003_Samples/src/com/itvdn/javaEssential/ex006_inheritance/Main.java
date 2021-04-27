package com.itvdn.javaEssential.ex006_inheritance;

public class Main {
    public static void main(String[] args) {
        DerivedClass instance = new DerivedClass();
        BaseClass baseInstance = new BaseClass();
        instance.method();

        // UpCast
        BaseClass instanceUp = instance;
        instanceUp.method();

        // DownCast
        DerivedClass instanceDown = (DerivedClass) instanceUp;
//        DerivedClass instanceFromBase = (DerivedClass) baseInstance;
        instanceDown.method();
//        instanceFromBase.method();
    }
}
