package com.itvdn.domain.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.logging.Logger;

/**
 * Created by itvdn on 22.06.18.
 */
public class Calculate {


    Logger LOG;

    public Calculate() throws InterruptedException {
        for (int i = 1; i < 10; i++) {
            Thread.currentThread().sleep(800);
            System.out.println("Calculate: iteration #" + i);
        }
    }

    public void getInfo() {
        LOG.info("info log");
    }

    @Autowired
    public void setLOG(Logger myLogger){
        this.LOG = myLogger;
    }

}
