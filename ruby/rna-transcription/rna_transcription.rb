class Complement

  @@transformation = {'G' => 'C', 'C' => 'G', 'T' => 'A', 'A' => 'U'}

  def self.of_dna(strand)
    rna_complement = ''
    validStrand = true

    strand.each_char { |nucleotide|
      if(@@transformation.has_key?(nucleotide))
        rna_complement += @@transformation[nucleotide]
      else
        validStrand = false
      end
    }

    validStrand ? rna_complement : ''
  end

end

module BookKeeping
  VERSION = 4
end
