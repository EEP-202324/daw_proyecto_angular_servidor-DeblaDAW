package debla.springboot;

import java.util.Objects;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Aula {

	@Id
	@GeneratedValue
	private Long id;
	
	private String nombre;
	private String gmail;
	private String ubicacion;
	
	
	public Aula() {
		
	}


	public Aula(Long id, String nombre, String gmail, String ubicacion) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.gmail = gmail;
		this.ubicacion = ubicacion;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getGmail() {
		return gmail;
	}


	public void setGmail(String gmail) {
		this.gmail = gmail;
	}


	public String getUbicacion() {
		return ubicacion;
	}


	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}
	
	
	@Override
	public int hashCode() {
		return Objects.hash(gmail, id, nombre, ubicacion);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Aula other = (Aula) obj;
		return Objects.equals(gmail, other.gmail) && Objects.equals(id, other.id)
				&& Objects.equals(nombre, other.nombre) && Objects.equals(ubicacion, other.ubicacion);
	}


	@Override
	public String toString() {
		return "Aula [id=" + id + ", nombre=" + nombre + ", gmail=" + gmail + ", ubicacion=" + ubicacion + "]";
	}
	
	
	
	
}
