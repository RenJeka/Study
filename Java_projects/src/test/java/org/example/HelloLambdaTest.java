package org.example;

import org.junit.Assert;
import org.junit.Test;

public class HelloLambdaTest {

    @Test
    public void shouldReturnHelloMessage() {
        HelloLambda sut = new HelloLambda();
        Assert.assertEquals("Hello, AWS Lambda! Here is Yevhenii", sut.handleRequest());
    }
}
