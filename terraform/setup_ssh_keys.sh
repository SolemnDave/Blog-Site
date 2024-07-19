# To make sure the script is executable run:
# chmod +x setup_ssh_keys.sh 

KEY_DIR=~/Projects/my_ssh_keys

mkdir -p "$KEY_DIR"

PRIVATE_KEY="$KEY_DIR/id_rsa"
PUBLIC_KEY="$PRIVATE_KEY.pub"

if [ ! -f "$PRIVATE_KEY" ]; then
  ssh-keygen -t rsa -b 2048 -f "$PRIVATE_KEY" -N ""
  echo "SSH key pair generated and stored in $KEY_DIR"
else
  echo "SSH key pair already exists in $KEY_DIR"
fi
