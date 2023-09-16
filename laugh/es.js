var punsarray = Array(
  "¿Qué hace un mudo bailando? Una mudanza.",
  "¿Qué le dice una impresora a otra? Esta hoja es tuya o es impresión mía.",
  "¿Sabes por qué no se puede discutir con un DJ? Porque siempre están cambiando de tema.",
  "¿Qué hace un perro con un taladro? Ta-ladrando.",
  "¿Qué hace una abeja en el gimnasio? Zumba",
  "¿Qué le dice una morsa a otra morsa? ¿Almorsamos o qué?",
  "¿Qué le dice un pato a otro pato con el que estaba compitiendo en una carrera? Hemos empatado.",
  "¿Qué le dice un techo a otro? Techo de menos.",
  "¿Qué le dijo una pared a otra pared? Nos encontramos en la esquina.",
  "¿Qué le dice un zapato a otro zapato? Nos están pisando.",
  "¿Por qué un mago no sería bueno en el boxeo? Porque sería el magolpeado.",
  "¿Qué le dice un jardinero a otro? Seamos felices mientras podamos.",
  "Eliminar correos no deseados es muy fácil: spam comido.",
  "¿Cómo se dice puerta en inglés? Door. ¿Y el que las vende? Vendedoor. ¿Y el que las compra? Compradoor.",
  "Íbamos a contarte un chiste sobre sodio... pero Na.",
  "No cabe duda, y duda se fue caminando.",
  "Doctor, doctor, tengo paperas. Pues toma 2€ y ya tienes pá plátanos.",
  "Qué mal me caen los químicos: los sodio.",
  "En Hawái no te hospedan: te alohan.",
  "¿Qué tiene Papá Noel cuando le falta un reno? Insuficiencia renal.",
);
var puns = function () {
  var newpun = punsarray[Math.floor(Math.random() * punsarray.length)];
  document.getElementById("laugh-text").innerHTML = newpun;
  document.getElementById("sharepun").value = newpun;
};
