package debla.springboot;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.JsonTest;
import org.springframework.boot.test.json.JacksonTester;

import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;

@JsonTest
class AulaJsonTest {

    @Autowired
    private JacksonTester<Aula> json;

    @Test
    void aulaSerializationTest() throws IOException {
        Aula aula = new Aula(99L, "pepe","gmail","tucorazon");
        assertThat(json.write(aula)).isStrictlyEqualToJson("expected.json");
        assertThat(json.write(aula)).hasJsonPathNumberValue("@.id");
        assertThat(json.write(aula)).extractingJsonPathNumberValue("@.id")
                .isEqualTo(99);
        assertThat(json.write(aula)).hasJsonPathStringValue("@.nombre");
        assertThat(json.write(aula)).extractingJsonPathStringValue("@.nombre")
             .isEqualTo("pepe");
        assertThat(json.write(aula)).hasJsonPathStringValue("@.gmail");
        assertThat(json.write(aula)).extractingJsonPathStringValue("@.gmail")
             .isEqualTo("gmail");
        assertThat(json.write(aula)).hasJsonPathStringValue("@.ubicacion");
        assertThat(json.write(aula)).extractingJsonPathStringValue("@.ubicacion")
             .isEqualTo("ubicacion");
    }
}