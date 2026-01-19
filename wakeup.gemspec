# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "wakeup"
  spec.version       = "0.1.0"
  spec.authors       = ["김지성"]
  spec.email         = ["adk24211@gmail.com"]

  spec.summary       = "일어나. 공부해야지."
  spec.homepage      = "https://adk2421.github.io/wakeup/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.4"
end
