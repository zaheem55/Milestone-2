document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create the resume HTML content
    var resumeHTML = "\n        <h2>Resume</h2>\n        <h3>".concat(name, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display the resume
    document.getElementById('resume-display').innerHTML = resumeHTML;
});
