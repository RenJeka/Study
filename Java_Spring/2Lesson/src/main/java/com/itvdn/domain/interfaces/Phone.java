package com.itvdn.domain.interfaces;

/**
 * Created by itvdn on 17.06.18.
 */
public interface Phone {
    boolean sendMessage(Person recipient);
    void makeCall(Person subscriber);
    default String sendLowBatteryNotification(){
        return "Battery is low. Please charge the phone.";
    }
}
