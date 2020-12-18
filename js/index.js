function cal() {
    var atk = document.getElementById("atk").value;
    var cr = document.getElementById("cr").value / 100;
    var cratk = document.getElementById("cratk").value / 100;
    var sadd = document.getElementById("sadd").value / 100;
    var sall = document.getElementById("sall").value / 100;
    var equip = document.getElementById("equip").value / 100;
    var skill = document.getElementById("skill").value / 100;
    var defend = 1 - document.getElementById("defend").value / 100;

    var unknownde = 0.52;
    var relh = atk * skill * (1 + sadd + sall + equip) * unknownde;
    var crh = relh * (1 + cratk);
    var relall = relh + (crh - relh) * cr

    document.getElementById("result1").value = relh * defend;
    document.getElementById("result2").value = relall * defend;
    document.getElementById("result3").value = crh * defend;
}