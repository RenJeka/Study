package org.yevhenii;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class HelloLambdaTest {

    @Test
    public void shouldReturnHelloMessage() {
        var sut = new HelloLambda();
        Assertions.assertEquals("Hello, Yevhenii. This is AWS Lambda-2", sut.handleRequest());
    }
}