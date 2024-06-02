package debla.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AulaController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, Spring Boot 2!";
    }
}

