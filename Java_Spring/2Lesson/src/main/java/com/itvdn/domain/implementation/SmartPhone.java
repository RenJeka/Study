package com.itvdn.domain.implementation;

import com.itvdn.domain.interfaces.Person;
import com.itvdn.domain.interfaces.Phone;
import lombok.Data;
import lombok.Generated;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Objects;
import java.util.logging.Logger;

/**
 * Created by itvdn on 17.06.18.
 */
@Data
public class SmartPhone implements Phone {
    private String brand;
    private List<Person> subscriberList;
    private Logger LOG;

    @Override
    public boolean sendMessage(Person recipient) {
        boolean personExist = !Objects.isNull(recipient) && subscriberList.contains(recipient);
        LOG.info((personExist ? "Message was sent successful" : "Message was not sent") + "\n\n\n");
        return personExist;
    }

    @Override
    public void makeCall(Person subscriber) {
        boolean personExist = !Objects.isNull(subscriber) && subscriberList.contains(subscriber);
        LOG.info((personExist ? "Connection was established" : "Can not find this user.") + "\n\n\n");
    }
}
