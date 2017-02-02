class Hamming

  def self.compute(strand_A, strand_B)

    if(strand_A.length != strand_B.length)
      raise ArgumentError.new('Different sizes')
    end

    differencesBetween = 0
    for i in 0..strand_A.length-1
      if strand_A[i] != strand_B[i]
        differencesBetween += 1
      end
    end

    return differencesBetween

  end
end

module BookKeeping
  VERSION = 3
end
