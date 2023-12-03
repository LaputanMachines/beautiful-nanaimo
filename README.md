```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
echo '# Install Ruby Gems to ~/gems' >> ~/.zshrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.zshrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
gem install jekyll bundler
```

```bash
bundle install
jekyll serve
```

![image](https://github.com/LaputanMachines/beautiful-nanaimo/assets/8591722/ca2b2491-3575-4fe4-ac07-4fea2a9aa553)
