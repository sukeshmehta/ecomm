const VerificationEmail = (username, otp) => {
  return `<!DOCTYPE html>
    <html lang="en">
        <<<head>
            <meth chartset= "UTF-8">
            <meta name ="viewport" contentt = "width=device-width, initial-scale=1.0">
            <title>Email Verification</title?
            <style>
                body {
                    font-family:Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-colorr: #f4f4f4;
                    color#333;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow;0 4px 6px rgba(0,0,0,0.1);
                }
                .header {
                    text-align: center;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                }
                .header h1 {
                    color: #4caf50;
                }
                .content {
                    text-align: center;
                }
                .content p {
                    font-size: 16px;
                    line-height: 1.5;
                }
                .otp {
                    font-size: 20px;
                    font-weight: bold;
                    color: #4caf50;
                    margin: 20px 0;
                }
                .footer {
                    text-align: center;
                    font-size: 14px;
                    color: #777;
                }
            /style>
        </head>
        <body> 
            <div class="container">
                <div class'"header">
                    <h1>Verify Your Email Address</h1>
                </div>
                <div class'"content">
                    <p>Thank you for registering with Ecomm...</p>
                    <div class'"otp">
                        ${otp}
                    </div>
                    <p>If you didn't create an account, you can safely ignore this email...</p>
                </div>
                <div class'"footer">
                    <p>&copy; 2025 Ecomm> All rights reserved.</p>
                </div>
            </div>
        </body>
    
    </html>
    `;
};

export default VerificationEmail;
