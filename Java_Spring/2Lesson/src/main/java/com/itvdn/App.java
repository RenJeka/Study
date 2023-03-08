package com.itvdn;

import com.itvdn.domain.implementation.Calculate;
import com.itvdn.domain.implementation.SmartPhone;
import com.itvdn.domain.interfaces.Person;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.logging.Logger;


public class App {
    private static final Logger LOG = Logger.getLogger("myLogger");

    public static void main(String[] args) {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("context.xml");


        Person person1 = ctx.getBean("person1", Person.class);
        Person person2 = ctx.getBean("person2", Person.class);
        Person person3 = ctx.getBean("Peter", Person.class);
        Person person4 = ctx.getBean("Petro", Person.class);


        SmartPhone samsungPhone = ctx.getBean("samsungPhone", SmartPhone.class);
        boolean status = samsungPhone.sendMessage(person1);
        LOG.info(String.valueOf(status) + "\n\n\n");
        samsungPhone.makeCall(person2);

        LOG.info(person3.toString() + " Peter is here");
        LOG.info(person4.toString() + " Petro also is here");


        ctx.getBean("oldPhone", Calculate.class).getInfo();

        System.out.println();
        System.out.println(ctx.getBean("subscriberList").toString());

    }
}
