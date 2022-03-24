$ (document).ready(function() {
  $("#animal").change(function() {
    const selectedAnimal = $("#animal").val();
    animalDisplay(selectedAnimal);
  });

  $("button").click(function() {
    let number = parseInt(Math.floor(Math.random()*3));
    if(number === 0) {
      showHydra();
    } else if (number === 1) {
      showChimera();
    } else {
      showSphinx();
    }
  });


});



function animalDisplay(selectedAnimal) {
  if(selectedAnimal === "hydra") {
    showHydra();
  } else if(selectedAnimal === "chimera") {
    showChimera();
  } else if(selectedAnimal === "sphinx"){
    showSphinx();
  } else {
    $("#sphinx, #chimera, #hydra").addClass("hidden");
  }
}


function showHydra() {
  $("#hydra").removeClass("hidden");
  $("#sphinx, #chimera").addClass("hidden");
}

function showChimera() {
  $("#chimera").removeClass("hidden");
  $("#hydra, #sphinx").addClass("hidden");
}

function showSphinx() {
  $("#sphinx").removeClass("hidden");
  $("#hydra, #chimera").addClass("hidden");
}


