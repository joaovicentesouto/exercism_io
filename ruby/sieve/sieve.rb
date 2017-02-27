class Sieve

  def initialize(number)
    @number = number
  end

  def primes
    arrayOfPossibilities = Array.new(@number-1, true) #The array index is relative to index+2
    primes = []
    arrayOfPossibilities.each_with_index { |condition, index|
      if condition
        findingMultiple(index+2, arrayOfPossibilities, @number)
        primes.push(index+2)
      end
    }
    primes
  end

  def findingMultiple(base, arrayOfPossibilities, limit)
    squareBase = base ** 2
    for times in 0..limit
      multiple = squareBase+(times*base)
      if(multiple <= limit)
        arrayOfPossibilities[multiple-2] = false
      else
        break
      end
    end
  end

end

module BookKeeping
  VERSION = 1
end
