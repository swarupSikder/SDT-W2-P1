const math = [45, 56, 87];
const english = [76, 40, 92];
const gradeSheet = [];

for (let index = 0; index < math.length; index++) {
    const math_num = math[index];
    const eng_num = english[index];

    let avg_marks = (math_num + eng_num) / 2;
    if (avg_marks <= 32) {
        gradeSheet.push("F");
    }
    else if (33 <= avg_marks && avg_marks <= 39) {
        gradeSheet.push("D");
    }
    else if (40 <= avg_marks && avg_marks <= 49) {
        gradeSheet.push("C");
    }
    else if (50 <= avg_marks && avg_marks <= 59) {
        gradeSheet.push("B");
    }
    else if (60 <= avg_marks && avg_marks <= 69) {
        gradeSheet.push("A-");
    }
    else if (70 <= avg_marks && avg_marks <= 79) {
        gradeSheet.push("A");
    }
    else if (80 <= avg_marks) {
        gradeSheet.push("A+");
    }
}

console.log(...gradeSheet);