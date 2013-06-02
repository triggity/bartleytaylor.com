import smtplib
from email.mime.text import MIMEText

from flask import Flask, request

app = Flask(__name__)

@app.route("/email", methods=['POST'])
def email():

    from_email = "btsmtpserver@gmail.com"
    password = "m420j~!@"
    to = "truongmt@gmail.com"

    # Create a text/plain message
    message = "email from : {} \n name:{} \n text: {} ".format(
        request.form['email'], request.form['name'], request.form['text'])
    msg = MIMEText(message)
    msg['Subject'] = "New Email From Your Website"
    msg['From'] = from_email
    msg['To'] = to 
    print "request data {}".format(request.form)
    return request.data

    #try:
    #    s = smtplib.SMTP('smtp.gmail.com:587')
    #    s.starttls()  
    #    s.login(from_email, password)  
    #    s.sendmail(from_email, to, msg.as_string())
    #    s.quit()
    #    msg = "Successfully sent email"
    #except Exception as e:
    #    msg = "Error: unable to send email: ", e

    #print msg
    #return msg

if __name__ == "__main__":
    app.run(debug=True)






