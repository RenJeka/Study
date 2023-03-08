package com.itvdn.springbootdemo;

import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

//@Configuration
@ImportResource(locations = "classpath:/context/app-ctx.xml")
public class OldConfig {

}
