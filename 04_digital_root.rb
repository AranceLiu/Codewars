def digital_root(n)
  result = n
  while result > 9
    result = result.digits.sum
  end
  result
end

puts digital_root(0)          # 0
puts digital_root(16)         # 7
puts digital_root(942)        # 6
puts digital_root(132189)     # 6
puts digital_root(493193)     # 2