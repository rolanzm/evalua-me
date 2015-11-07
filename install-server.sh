#**** unicorn ****
cd ~/workspace
mkdir -p shared/pids shared/sockets shared/log
cp unicorn_evaluame /etc/init.d/unicorn_evaluame
sudo chmod 755 /etc/init.d/unicorn_evaluame
sudo update-rc.d unicorn_evaluame defaults
sudo service unicorn_evaluame start

#**** nxingx *****
cd ~/workspace
sudo cp nginx-default /etc/nginx/sites-available/default
sudo service nginx restart
#sudo nginx -s reload